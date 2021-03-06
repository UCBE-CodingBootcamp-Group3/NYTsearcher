import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import { Form, Input, FormBtn, FormGroup, Label } from '../../components/Form';
import { Article } from '../../components/Article';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import axios from 'axios';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        comments: [],
      },
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    const user = localStorage.getItem('user');
    const id = this.props.match.params.id;
    API.getArticleU(user, id)
      .then(result => {
        this.setState({ article: result.data });
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.props.history.push('/login');
        }
      });
  }

  //capturing state of inputs on change
  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { article, subjectForm, authorForm, commentForm } = this.state;
    API.saveComment(article._id, subjectForm, authorForm, commentForm)
      .then(res => {
        this.setState({ comments: res.data.comments });
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      subjectForm: '',
      authorForm: '',
      commentForm: '',
    });
  };

  //function that queries API server and deletes articles
  deleteArticle = id => {
    const user = localStorage.getItem('user');
    API.deleteArticleU(user, id)
      .then(results => {
        this.props.history.push('/savedArticles');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-10" offset="sm-1">
            <Jumbotron>
              <H1 className="text-center">Saved New York Times Articles</H1>
              <hr style={{ width: '60%' }} />
            </Jumbotron>
            <Panel>
              <PanelHeading>
                <H3>Comment On Article</H3>
              </PanelHeading>
              <PanelBody>
                <Article
                  _id={this.state.article._id}
                  title={this.state.article.title}
                  url={this.state.article.url}
                  summary={this.state.article.summary}
                  date={this.state.article.date}
                  type="Delete"
                  onClick={() => this.deleteArticle(this.state.article._id)}
                />

                <Form style={{ marginBottom: '30px' }}>
                  <FormGroup>
                    <Label htmlFor="subjectForm">Enter a subject for the comment:</Label>
                    <Input
                      onChange={this.handleInputChange}
                      name="subjectForm"
                      value={this.state.subjectForm}
                      placeholder="Subject"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="authorForm">Enter your name as the author of this note:</Label>
                    <Input
                      onChange={this.handleInputChange}
                      name="authorForm"
                      value={this.state.authorForm}
                      placeholder="Author"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="commentForm">Enter your comment here:</Label>
                    <Input
                      onChange={this.handleInputChange}
                      name="commentForm"
                      value={this.state.commentForm}
                      placeholder="Comment"
                    />
                  </FormGroup>

                  <FormBtn
                    disabled={
                      !this.state.subjectForm || !this.state.authorForm || !this.state.commentForm
                    }
                    onClick={this.handleFormSubmit}
                    type="info"
                  >
                    Submit
                  </FormBtn>
                </Form>

                <Link to={`/savedArticles`}>See All Saved Articles</Link>

                <br />
                <br />
              </PanelBody>

              <section>
                {this.state.article.comments.map(comment => (
                  <div>
                    <div>Subject: {comment.subject}</div>
                    <div>Author: {comment.author}</div>
                    <div>Comment: {comment.comment}</div>
                    <div>======================</div>
                  </div>
                ))}
              </section>
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Comments;
