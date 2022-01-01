import React from "react"
import { Form, Button, Col } from "react-bootstrap"

const SERVICE_ID = "service_roo2536"
const TEMPLATE_ID = "template_5y3mfyf"
const USER_ID = "user_Z51AzFNUZsmRrjI403BUX"

function FormHero() {
  return (
    <div
      className="formular col-l-4"
      style={{
        zIndex: "4",
      }}
    >
      <Form
        className="mb-5 ml-1 mr-1"
        name="heroForm"
        method="POST"
        data-netlify="true"
        action="/success"
      >
        <input type="hidden" name="heroForm" value="heroForm" />
        <Form.Row>
          <Col>
            <Form.Control
              size="sm"
              name="ime"
              className="mb-1 formPolje text-white"
              type="text"
              placeholder="Ime"
            />
          </Col>
          <Col>
            {" "}
            <Form.Control
              size="sm"
              name="prezime"
              className="mb-1 formPolje text-white"
              type="text"
              placeholder="Prezime"
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control
              size="sm"
              name="email"
              className="formPolje text-white"
              type="email"
              placeholder="Vaš email"
            />{" "}
          </Col>
          <Col>
            <Form.Control
              size="sm"
              name="god rođ"
              as="select"
              className=" formPolje text-white"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">Godina rođenja</option>
              <option value="1950">1950</option>
              <option value="1951">1951</option>
              <option value="1952">1952</option>
              <option value="1953">1953</option>
              <option value="1954">1954</option>
              <option value="1955">1955</option>
              <option value="1956">1956</option>
              <option value="1957">1957</option>
              <option value="1958">1958</option>
              <option value="1959">1959</option>
              <option value="1960">1960</option>
              <option value="1961">1961</option>
              <option value="1962">1950</option>
              <option value="1963">1963</option>
              <option value="1964">1964</option>
              <option value="1965">1965</option>
              <option value="1966">1966</option>
              <option value="1967">1967</option>
              <option value="1968">1968</option>
              <option value="1969">1969</option>
              <option value="1970">1970</option>
              <option value="1971">1971</option>
              <option value="1972">1972</option>
              <option value="1973">1973</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Group className="mt-2" controlId="formBasicCheckbox">
          <Form.Check
            style={{ color: "white", marginLeft: "20px" }}
            name="Želim primati obavijesti škole"
            type="checkbox"
            label="Želim primati obavijesti Škole"
          />
        </Form.Group>
        <Button
          style={{ marginLeft: "20px" }}
          variant="primary"
          type="submit"
          size="sm"
        >
          Pošalji prijavu
        </Button>
      </Form>
    </div>
  )
}

export default FormHero
