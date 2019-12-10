import React from 'react';
import { withRouter } from 'react-router-dom';

class DepartmentProfile extends React.Component {
  state = {
    department: null
  }

  async componentDidMount() {
    
  }

  render() {
    console.log(this.props)
    return (
      <div>

      </div>
    )
  }
}

export default withRouter(DepartmentProfile)