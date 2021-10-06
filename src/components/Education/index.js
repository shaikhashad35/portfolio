import React from "react";
import Card from "react-bootstrap/Card";

export default function Education() {
  return (
    <div className="mainContent">
      <div className="headName"> EDUCATION </div>
      <div className="educations">
        <Card>
          <Card.Body>
            <Card.Title>
              UNIVERSITY OF MUMBAI &nbsp; &nbsp; | &nbsp; &nbsp; BE in Computer
              Science
            </Card.Title>
            <Card.Text>
              2015-2019 &nbsp; &nbsp; | &nbsp; &nbsp;Mumbai &nbsp; &nbsp; |
              &nbsp; &nbsp; CGPA: 8.29/10
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              RIZVI COLLEGE OF ASC &nbsp; &nbsp; | &nbsp; &nbsp; 12th in
              Science-IT
            </Card.Title>
            <Card.Text>
              2013-2015 &nbsp; &nbsp; | &nbsp; &nbsp;Mumbai &nbsp; &nbsp; |
              &nbsp; &nbsp; 75%
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              ST. MICHAEL HIGH SCHOOL &nbsp; &nbsp; | &nbsp; &nbsp;10th
            </Card.Title>
            <Card.Text>
              2013 &nbsp; &nbsp; | &nbsp; &nbsp;Mumbai &nbsp; &nbsp; | &nbsp;
              &nbsp; 85%
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
