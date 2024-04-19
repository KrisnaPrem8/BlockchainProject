import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import contracts from '../../ethereum/contracts';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class InsuranceNew extends Component {
  state = {
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await contracts.methods
        .deployInsurance()
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Register your EV</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Registration</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.status}
              onChange={event =>
                this.setState({ status: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Send!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default InsuranceNew;
