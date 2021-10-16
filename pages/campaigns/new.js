import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3'

class CampaignNew extends Component {
    state = {
        minimumContribution: ''
    }

    onSubmit = async (event) => {
        // preventing the browsere to submit the form to our backend
        event.preventDefault();
    
        // using web3 to get a list of accounts through metamask
        const accounts = await web3.eth.getAccounts();

        await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });
    }

    render() {
        return (
            <Layout>
                <h3>Createa a new campaign</h3>

                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                        label="wei" 
                        labelPosition="right" 
                        value={this.state.minimumContribution}
                        onChange={event => this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>
                    <Button primary>
                        Create new campaign
                    </Button>
                </Form>
            </Layout>

        );
    }
}

export default CampaignNew;