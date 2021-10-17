pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint256 minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    // This is a struct definiton, it does not create and instance!
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    // Using the struct Request to declare a requests variable with the Request type
    Request[] public requests;
    // Declaring the variables
    // Manager -> Owns the Campaign
    address public manager;
    // Minimum Contribution to become a backer
    uint256 public minimumContribution;
    // Backers:
    mapping(address => bool) public approvers;
    // Keeping track of how many backers:
    uint256 public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint256 minimum, address creator) public {
        // The manager is whoemver deploys the contract (msg.sender)
        manager = creator;
        // This function is initialised with the "minimum" argyment.
        // This argument is the minimum plea to back the campaign.
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        // Increase the approversCount when someone contributes:
        approversCount++;
    }

    function createRequest(
        string description,
        uint256 value,
        address recipient
    ) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint256 index) public {
        //Declaring a local variable:
        Request storage request = requests[index];
        //Checking if this person backed the project:
        require(approvers[msg.sender]);
        //Checking if this person have NOT yet voted on this request. If so, the following statement should be true.
        require(!request.approvals[msg.sender]);
        //Marking that this person voted on this request:
        request.approvals[msg.sender] = true;
        //Increasing the count:
        request.approvalCount++;
    }

    function finalizeRequest(uint256 index) public restricted {
        Request storage request = requests[index];
        // Checking if more than 50% of backers voted YES for the approval:
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }
    
    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {
        return (
          minimumContribution,
          this.balance,
          requests.length,
          approversCount,
          manager
        );
    }
    
    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}
