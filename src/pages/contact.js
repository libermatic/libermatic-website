import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  Container,
  Title,
  Content,
  Field,
  FieldLabel,
  FieldBody,
  Label,
  Control,
  Input,
  Select,
  Icon,
  TextArea,
  Button,
  Notification,
  Delete,
} from 'bloomer';

import Hero from '../components/hero';
import styles from './contact.module.scss';

const requestTypes = [
  { req: 'general_info', label: 'General Information' },
  { req: 'request_demo', label: 'Request a Demo' },
  { req: 'erpnext_supplement', label: 'ERPNext Support' },
];

class Contact extends Component {
  constructor(props) {
    super(props);
    const { state } = this.props.location;
    this.state = {
      isLoading: false,
      fields: state ? { request: state.req } : { request: 'general_info' },
      message: {},
    };
  }
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
        message: { notify: 'success', text: 'Query successful' },
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
      request = '',
      query = '',
    } = this.state.fields;
    const { data } = this.props;
    return (
      <div>
        <Helmet>
          <title>libermatic. - Contact</title>
          <meta
            name="description"
            content="Social links and form to contact libermatic."
          />
        </Helmet>
        <Hero isColor="light" {...data.heroImage}>
          <Title>Contact</Title>
        </Hero>
        <Container className={styles.section}>
          <Content>
            <h2>Need help with anything?</h2>
            <p>
              Ask us anything regarding our products or otherwise. We are always
              happy to hear from you.
            </p>
            <p>
              Tweet us about what you&apos;d want to know and we&apos;ll get
              back to you. But you could always use the form.
            </p>
            <p>
              <Button
                className={styles.tweet}
                href="https://twitter.com/intent/tweet?text=Hi&screen_name=libermatic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon isSize="small" isAlign="left">
                  <span className="fab fa-twitter" aria-hidden="true" />
                </Icon>
                <span>Tweet @libermatic</span>
              </Button>
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
                    aria-label="Name"
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
                    aria-label="Email"
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
                    aria-label="Phone"
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
                    aria-label="Organization"
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
                    aria-label="Website"
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
                <Control hasIcons="left">
                  <Select
                    aria-label="Query Type"
                    name="request"
                    value={request}
                    onChange={this.handleChange}
                  >
                    {requestTypes.map(({ req, label }) => (
                      <option key={req} value={req}>
                        {label}
                      </option>
                    ))}
                  </Select>
                  <Icon isSize="small" isAlign="left">
                    <span className="fas fa-question" aria-hidden="true" />
                  </Icon>
                </Control>
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel isNormal>
              <Label />
            </FieldLabel>
            <FieldBody>
              <Field>
                <Control>
                  <TextArea
                    placeholder="Things you would like to know about (required)"
                    aria-label="Query"
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
Contact.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      req: PropTypes.string,
    }),
  }).isRequired,
  data: PropTypes.shape({
    heroImage: PropTypes.object,
  }).isRequired,
};

export default Contact;

export const query = graphql`
  query ContactHeroImageQuery {
    heroImage: imageSharp(id: { regex: "/255527/" }) {
      sizes(maxWidth: 1408) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
