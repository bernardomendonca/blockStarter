import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
  };

  onSubmit = async (event) => {
    // preventing the browsere to submit the form to our backend
    event.preventDefault();

    // We'll run a try/catch combo to pass any error messages onto the user
    try {
      // using web3 to get a list of accounts through metamask
      const accounts = await web3.eth.getAccounts();
      // using teh createCampaign method from the factory.js file to create a new campaign
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
        });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  render() {
    return (
      <Layout>
        <h3>Createa a new campaign</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />

          <Button primary>Create new campaign</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
