pragma solidity ^0.4.17;

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

    modifier restricted() {
        require(msg.send == manager);
        _;
    }

    function Campaign(uint256 minimum) public {
        // The manager is whoemver deploys the contract (msg.sender)
        manager = msg.sender;
        // This function is initialised with the "minimum" argyment.
        // This argument is the minimum plea to back the campaign.
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimnumContribution);

        approvers[msg.sender] = true;
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
            complete: false
        });

        requests.push(newRequest);
    }
}
