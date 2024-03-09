# ETH Oxford - Health Book

Health Book empowers you to securely store on-chain and conveniently share your medical records with authorized individuals, ensuring that pertinent information is readily available when needed most. No more scrambling to remember every detail during appointments or worrying about leaving out crucial information. Grant access to trusted healthcare providers, putting you in control of your healthcare journey. 

Here's how Health Book transforms your healthcare experience:

- Effortless Record-Keeping: Say goodbye to stacks of paperwork and scattered files. Health Book allows you to effortlessly organize and update your medical history, keeping track of appointments, medications, allergies and test results all in one place.

- Seamless Sharing: Prepare for appointments like never before by sharing your medical data with your healthcare provider in advance. This enables your doctor to tailor their approach and make informed decisions, ultimately enhancing the quality of care you receive.

- Data control: When transitioning to a new healthcare provider, Health Book ensures a smooth handoff of your medical history. Your new doctor gains immediate access to your complete health record, eliminating the need for you to recount past diagnoses and treatments.

- Emergency Preparedness: Offers a unique solution for emergency situations. Share your medical records through a wearable bracelet or necklace, emergency responders and medical personnel can quickly access critical information about your health history, allergies, and medications. This real-time access enables them to make informed decisions and provide the best possible care, even in high-pressure scenarios where time is of the essence.


Health Book isn't just about convenience—it's about empowering individuals to take control of their health journey and fostering stronger connections between patients and providers.

Join us in revolutionizing healthcare with Health Book. Together, we can transform the way medical records are managed and ensure that everyone receives the personalized care they deserve.

## Get started

Take a look at our website: https://eth-oxford-khaki.vercel.app/


## Technical Implementation

We are using Aleph Zero to store medical records of patients on the Blockchain. We decided to build on top of Aleph Zero as the Privacy Engine is in they roadmap and can provide us a fully private state. 

We have use the `ink!athon` boilerplate to structure the project organization for the smart contract and front end.
Contract information can be found in `inkathon/contract/`.



## Roadmap

At the moment, we have a list of records for all users. New records can only be added by the user. But we could imagine in the future a consortium of doctors that are allow to update or add new medical records after an appoitment or medical opperation. 

Another point to think would be to let the user the possibility to segment their medical data and choose which information to share with different parties. For example, individuals may want to share only relevant information related to a specific injury or condition while keeping other details private. This granular control empowers users to manage their privacy preferences according to their unique needs and preferences.

Finally, in response to critical situations where immediate access to medical information can be life-saving, we are thinking to introduce physical token designed to provide seamless emergency access to user data. Similar to a blood type card, this token can be scan enabling you to get access to your medical information in case of  emergencies. Whether it's an unexpected accident or a sudden medical crisis, this physical token ensure that vital information is immediately available, enabling rapid and informed decision-making by healthcare professionals.

