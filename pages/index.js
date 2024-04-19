import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import contracts from '../ethereum/contracts';
import Layout from '../components/Layout';
import { Link } from '../routes';

class VehicleIndex extends Component {
  static async getInitialProps() {
    const vehicles = await contracts.methods.getDeployedInsurances().call();

    return { vehicles };
  }

  renderVehicles() {
    const items = this.props.vehicles.map(address => {
      return {
        header: address,
        description: (
          "Krisna Prem"
        ),
        meta: (
          "AP31T3124"
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Vehicles</h3>

          <Link route="/Vehicles/new">
            <a>
              <Button
                floated="right"
                content="Register EV"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderVehicles()}
        </div>
      </Layout>
    );
  }
}

export default VehicleIndex;
