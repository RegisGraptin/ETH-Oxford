

import os
import io

from lighthouseweb3 import Lighthouse
from dotenv import load_dotenv

load_dotenv()

class FileCoinStorage:

    def __init__(self):
        self.lh = Lighthouse(token=os.environ["LIGHTHOUSE_TOKEN"])

    def store(self, source_file_path: str):
        upload = self.lh.upload(source=source_file_path)
        print("Regular File Upload Successful!")

    def get_cid_info(self, cid):
        list_uploads = self.lh.getUploads(cid)
        print("Upload Information:")
        print(list_uploads)

    def download_file(self, file_cid):
        destination_path = "./download/test_data.nii"

        file_info = self.lh.download(file_cid)

        file_content = file_info[0]

        with open(destination_path, 'wb') as destination_file:
            destination_file.write(file_content)

        # The file has been successfully downloaded and saved to the destination_path
        print("Download successful!")

if __name__ == "__main__":

    storage = FileCoinStorage()
    # storage.store("./data/T1.nii")
    
    cid = "QmPudbHicCsqb7sW8fYPpDdVzuaK18YxWg3HQ8yg4UdsAB"
    storage.download_file(cid)
    

    # # Regular file upload
    # source_file_path = 
    # store(source_file_path)
