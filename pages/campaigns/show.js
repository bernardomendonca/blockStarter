import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    //fetching the campaign instance by using its address and the function from ethereum/campaign.js:
    const campaign = Campaign(props.query.address);
    // The deployed contract has a function "getSummary" which returns the campaigns details. We'll use it

    const summary = await campaign.methods.getSummary().call();

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of campaign creator",
        description:
          "The creator of this campaign can create requests for how to spend the funds allocated",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution,
        meta: "minimum contribution to join the campaign (in wei)",
        description: "You must contribute at least this much wei",
      },
      {
        header: requestsCount,
        meta: "Number of requests",
        description:
          "A request can be placed by the creator of the campaign to withdraw money from it. The request has to be approved by the majority of the contributors",
      },
      {
        header: approversCount,
        meta: "Number of contributors",
        description: "Total of people who have donated to this campaign",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "campaign balance (ether)",
        description: "Amount of money left to spend",
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign details</h3>
        {this.renderCards()}
        <ContributeForm />
      </Layout>
    );
  }
}

export default CampaignShow;
