import React from 'react';
import PropTypes from 'prop-types';

import ProgressButton from 'us-forms-system/lib/js/components/ProgressButton';
import FormTitle from 'us-forms-system/lib/js/components/FormTitle';

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.startForm = this.startForm.bind(this);
  }

  startForm() {
    const firstPage = this.props.route.pageList[1].path;
    this.props.router.push(firstPage);
  }

  render() {
    return (
      <div className="schemaform-intro">
        <FormTitle title="Welcome to The Trio Programs Application" />
        <h2>Please provide the following with your completed application: </h2>
        <ol>
          <li>Current Report Card/Transcript</li>
          <li>Recent State Test Results (ISAT, PLAN, EXPLORE)</li>
          <li>
            Signed IRS 1040 forms or signed request for Transcript of Tax Return
            Form (4506-T)
          </li>
          <li>School Attendance Record</li>
          <li>Power School/CPS Login Information (if applicable)</li>
        </ol>
        <p>Get started on the application!</p>
        <ProgressButton
          onButtonClick={this.startForm}
          buttonText="Start application"
          buttonClass="usa-button-primary schemaform-start-button"
          afterText="»"
        />
      </div>
    );
  }
}

Introduction.propTypes = {
  route: PropTypes.object,
  router: PropTypes.object,
};

export default Introduction;
