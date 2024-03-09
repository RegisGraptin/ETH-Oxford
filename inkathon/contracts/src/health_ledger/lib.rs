#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod health_ledger {

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
    #[ink(storage)]
    #[derive(Default, Clone)]
    pub struct HealthLedger {
        records: Vec<HealthRecord>
    }

    impl HealthLedger {

        /// Constructor
        #[ink(constructor)]
        pub fn new() -> Self {
            Self { 
                records: Vec::new()
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
            let new_record = HealthRecord {
                date: 0,
                title,
                doctor,
                hospital,
                record_type
            };
            self.records.push(new_record);
        }

        /// Get the record
        #[ink(message)]
        pub fn get(&self) -> Vec<HealthRecord> {
            self.records.clone()
        }
    }

}
