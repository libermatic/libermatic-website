import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Content,
  Field,
  FieldLabel,
  FieldBody,
  Label,
  Control,
  Input,
  Icon,
  TextArea,
  Button,
  Notification,
  Delete,
} from 'bloomer';

import styles from './contact.module.scss';

class Contact extends Component {
  state = { isLoading: false, fields: {}, message: {} };
  isValid = () => {
    const { email } = this.state.fields;
    if (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    return false;
  };
  handleChange = evt => {
    evt.preventDefault();
    this.setState({
      fields: { ...this.state.fields, [evt.target.name]: evt.target.value },
    });
  };
  handleSubmit = async () => {
    this.setState({ isLoading: true });
    try {
      const { email, query } = this.state.fields;
      if (!email || !query) {
        throw new Error('Missing required fields');
      }
      if (!this.isValid()) {
        throw new Error('Not a valid email');
      }
      // TODO: make req to frappe server
      this.setState({
        fields: {},
        message: { notify: 'success', text: 'Query successfull' },
      });
    } catch (err) {
      this.setState({ message: { notify: 'danger', text: err.toString() } });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    const {
      name = '',
      email = '',
      phone = '',
      company = '',
      website = '',
      query = '',
    } = this.state.fields;
    return (
      <div>
        <Helmet title="libermatic. - Contact" />
        <Hero isColor="info">
          <HeroBody>
            <Container>
              <Title>Contact</Title>
            </Container>
          </HeroBody>
        </Hero>
        <Container className={styles.section}>
          <Content>
            <h2>Need help with anything?</h2>
            <p>
              Ask us anything regarding our products or otherwise. We are always
              happy to hear from you.
            </p>
          </Content>
        </Container>
        <Container className={styles.section} tag="form">
          <Field isHorizontal>
            <FieldLabel isNormal>
              <Label>You</Label>
            </FieldLabel>
            <FieldBody>
              <Field>
                <Control isExpanded hasIcons="left">
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                  <Icon isSize="small" isAlign="left">
                    <span className="fas fa-user" aria-hidden="true" />
                  </Icon>
                </Control>
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel />
            <FieldBody>
              <Field>
                <Control isExpanded hasIcons={['left', 'right']}>
                  <Input
                    type="email"
                    isColor={
                      this.state.fields.email &&
                      (this.isValid() ? 'success' : 'danger')
                    }
                    placeholder="Email (required)"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <Icon isSize="small" isAlign="left">
                    <span className="fas fa-envelope" />
                  </Icon>
                  {this.isValid() && (
                    <Icon isSize="small" isAlign="right">
                      <span className="fas fa-check" />
                    </Icon>
                  )}
                </Control>
              </Field>
              <Field>
                <Control isExpanded hasIcons={['left', 'right']}>
                  <Input
                    type="phone"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange}
                  />
                  <Icon isSize="small" isAlign="left">
                    <span className="fas fa-phone" />
                  </Icon>
                </Control>
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel isNormal>
              <Label>Organization</Label>
            </FieldLabel>
            <FieldBody>
              <Field>
                <Control isExpanded hasIcons="left">
                  <Input
                    type="text"
                    placeholder="Name of the Organization"
                    name="company"
                    value={company}
                    onChange={this.handleChange}
                  />
                  <Icon isSize="small" isAlign="left">
                    <span className="fas fa-building" aria-hidden="true" />
                  </Icon>
                </Control>
              </Field>
              <Field>
                <Control isExpanded hasIcons="left">
                  <Input
                    type="text"
                    placeholder="Website"
                    name="website"
                    value={website}
                    onChange={this.handleChange}
                  />
                  <Icon isSize="small" isAlign="left">
                    <span className="fas fa-globe" />
                  </Icon>
                </Control>
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel isNormal>
              <Label>Query</Label>
            </FieldLabel>
            <FieldBody>
              <Field>
                <Control>
                  <TextArea
                    placeholder="Things you would like to know about (required)"
                    name="query"
                    value={query}
                    onChange={this.handleChange}
                  />
                </Control>
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel />
            <FieldBody>
              <Field isGrouped>
                <Control>
                  <Button
                    onClick={this.handleSubmit}
                    isLoading={this.state.isLoading}
                  >
                    Submit
                  </Button>
                </Control>
                <Control>
                  <Button
                    onClick={() => this.setState({ fields: {}, message: {} })}
                  >
                    Clear
                  </Button>
                </Control>
              </Field>
            </FieldBody>
          </Field>
        </Container>
        <Container className={styles.section}>
          {this.state.message.notify && (
            <Notification isColor={this.state.message.notify}>
              <Delete onClick={() => this.setState({ message: {} })} />
              {this.state.message.text}
            </Notification>
          )}
        </Container>
      </div>
    );
  }
}

export default Contact;
