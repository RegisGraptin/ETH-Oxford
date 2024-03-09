#![cfg_attr(not(feature = "std"), no_std, no_main)]


#[ink::contract]
mod health_ledger {

    use ink::storage::Mapping;
    use ink_prelude::string::String;
    use ink_prelude::vec::Vec;


    #[derive(Clone, Default, scale::Decode, scale::Encode)]
    #[cfg_attr(
        feature = "std",
        derive(Debug, PartialEq, Eq, scale_info::TypeInfo, ink::storage::traits::StorageLayout)
    )]    
    pub struct HealthRecord {
        date: u64,
        title: String,
        doctor: String,
        hospital: String,
        record_type: String
    }


    /// Health information of the user
    #[derive(Clone, Default, scale::Decode, scale::Encode)]
    #[cfg_attr(
        feature = "std",
        derive(Debug, PartialEq, Eq, scale_info::TypeInfo, ink::storage::traits::StorageLayout)
    )]
    pub struct PatientLedger {
        records: Vec<HealthRecord>
    }

    #[ink(storage)]
    pub struct HealthLedger {
        patients: Mapping<AccountId, PatientLedger>,
    }


    impl HealthLedger {

        #[ink(constructor)]
        pub fn new() -> Self {
            Self { 
                patients: Mapping::default()
            }
        }

        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new()
        }

        /// Store a new medical record
        #[ink(message)]
        pub fn add(
            &mut self,  
            title: String,
            doctor: String,
            hospital: String,
            record_type: String
        ) {
            let account_id = self.env().account_id();

            let mut health_ledger: PatientLedger; 

            if !self.patients.contains(account_id) {
                health_ledger = PatientLedger {
                    records: Vec::new()
                };
            } else {
                health_ledger = self.patients.get(account_id).unwrap();
            }

            let new_record = HealthRecord {
                date: self.env().block_timestamp(),
                title,
                doctor,
                hospital,
                record_type
            };

            health_ledger.records.push(new_record);
    
            self.patients.insert(&account_id, &health_ledger);
        }

        /// Get the record
        #[ink(message)]
        pub fn get(&self) -> Vec<HealthRecord> {
            let account_id = Self::env().caller();
            let health_ledger = self.patients.get(account_id);
            match health_ledger {
                Some(x) => x.records,
                _ => Vec::new()
            }
        }
    }



    #[cfg(test)]
    mod tests {
        use super::*;

        #[ink::test]
        fn new_instanciate() {
            let health = HealthLedger::new();
            let data = health.get();
            assert_eq!(data, []);
        }

        #[ink::test]
        fn test_add() {
            let mut health = HealthLedger::new();
            health.add(
                "title".to_string(), 
                "doctor".to_string(), 
                "hospital".to_string(), 
                "record".to_string()
            );
            let data = health.get();
            assert_eq!(data.len(), 1);
            
            health.add(
                "title".to_string(), 
                "doctor".to_string(), 
                "hospital".to_string(), 
                "record".to_string()
            );
            let data = health.get();
            assert_eq!(data.len(), 2);
        }



    }


}
