import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import contracts from '../../ethereum/contracts';
import web3 from '../../ethereum/web3';
//import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class VehicleShow extends Component {
  static async getInitialProps(props) {
    const vehicle = contracts(props.query.address);

    const summary = await contracts.methods.getSummary().call();

    return {
      address: props.query.address,
      OwnerName: summary[0],
      VehicleNumber: summary[1]
    };
  }

  renderCards() {
    const {
      OwnerName,
      VehicleNumber
    } = this.props;

    const items = [
      {
        header: OwnerName,
        meta: 'Owner Name',
        description:
          'Krisna Prem',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: VehicleNumber,
        meta: 'Vehicle Number',
        description:
          'AP31K3124'
      }
    ];

    return <Card.Group items={items} />;
  }

  /*render() {
    return (
      <Layout>
        <h3>Vehicle Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }*/
}

export default VehicleShow;
