#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod access {

    use ink::storage::Mapping;
    use ink_prelude::vec::Vec;

    #[ink(storage)]
    pub struct Access {
        doctors: Vec<AccountId>,
        authorizations: Mapping<(AccountId, AccountId), bool>,
    }

    impl Access {
        
        #[ink(constructor)]
        pub fn new() -> Self {
            Self { 
                doctors: Vec::new(),
                authorizations: Mapping::default()
            }
        }

        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new()
        }

        #[ink(message)]
        pub fn add_doctor(&mut self, doctor: AccountId) {
            // Future version
            // TODO :: check unicity
            // TODO :: add control over the doctor we can add
            self.doctors.push(doctor);
        }

        
        #[ink(message)]
        pub fn authorize(&mut self, doctor: AccountId) {
            self.authorizations.insert(
                &(self.env().caller(), doctor), &true
            );
        }

        #[ink(message)]
        pub fn revoke(&mut self, doctor: AccountId) {
            self.authorizations.insert(
                &(self.env().caller(), doctor), &false
            );
        }

        #[ink(message)]
        pub fn get_doctor(&self) -> Vec<AccountId> {
            (*self.doctors).to_vec()
        }

        #[ink(message)]
        pub fn get_authorization(&self, doctor: AccountId) -> bool {
            self.authorizations.get(
                (self.env().caller(), doctor)
            ).unwrap_or_default()
        }

    }

    /// Unit tests in Rust are normally defined within such a `#[cfg(test)]`
    /// module and test functions are marked with a `#[test]` attribute.
    /// The below code is technically just normal Rust code.
    #[cfg(test)]
    mod tests {
        /// Imports all the definitions from the outer scope so we can use them here.
        use super::*;

        /// We test if the default constructor does its job.
        #[ink::test]
        fn default_works() {
            let access = Access::default();
            assert_eq!(access.get(), false);
        }

        /// We test a simple use case of our contract.
        #[ink::test]
        fn it_works() {
            let mut access = Access::new(false);
            assert_eq!(access.get(), false);
            access.flip();
            assert_eq!(access.get(), true);
        }
    }

}
