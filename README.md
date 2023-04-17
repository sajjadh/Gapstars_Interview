##The following repo contains the server (which was given as part of the question, as well as the answer, i have also added some API testing scripts). The document related to API bugs and the Tested Postman script collection was sent to the email. 

Pre-Requisites. 
1. There will be a certail node version conflicts when working with the given server and the Playwright framework (Require version =>14.) node version. I recomen to use NVM or first install the Server artfacts, remove the node package and install the platwright recomended version (version => 14). 

2. Run the following command.
    `npm install`
3. The above code should ideally install all the dependencies.
4. Code Structure
    Contains 2 section: API testing : Have added few API scripts using playwright framework
                        UI Automation : Contains 3 folders
                                          1. PageObjects - Contains the actions and verification steps corresposning to each page.
                                          2. Spec - Contains test cases corresponding to each of the page
                                          3. Common - This added to show how the code could be improved to promote code re-usability. This is just an example on how to do it, these code were not used in the actual test scripts, however it also be used.
