import { Tab } from "bootstrap";
import React from "react";
import { Table, Container, Button } from "react-bootstrap";

const Home = (props) => {
  const promptList = [
    "Chain 1",
    "Chain 2",
    "Chain 3",
    "Chain 4",
    "Chain 5",
  ];

  return (
    <Container>
      <Table style={{ margin: "5vh" }} striped bordered hover>
        <thead>
          <tr>
            <th>(@)</th>
            <th>List of Polling Chains</th>
            <th>Go to Poll</th>
          </tr>
        </thead>
        <tbody>
          {promptList.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el}</td>
                <td>
                  {" => "}
                  <Button onClick={() => props.changeCandidates(el)}>
                    LesGo
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
