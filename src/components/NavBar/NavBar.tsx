import React from 'react';

import logo from '../../assets/images/logo.svg';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { RouterPathEnum } from '../../enums/RouterPathEnum';

import { IArticles } from '../../articles/Articles';
import Dropdown from './modules/Dropdown'


class NavBar extends React.Component<IArticles, any> {
  constructor(props: IArticles) {
    super(props)
    this.state = {
      stories_dropdown: 'hidden',
      interviews_dropdown: 'hidden',
      opinions_dropdown: 'hidden'
    }

    this.toggleStoryVisible = this.toggleStoryVisible.bind(this)
    this.toggleInterviewVisible = this.toggleInterviewVisible.bind(this)
    this.toggleOpinionVisible = this.toggleOpinionVisible.bind(this)

    this.toggleStoryHidden = this.toggleStoryHidden.bind(this)
    this.toggleInterviewHidden = this.toggleInterviewHidden.bind(this)
    this.toggleOpinionHidden = this.toggleOpinionHidden.bind(this)
  }

  toggleStoryVisible() {
    this.setState({
      stories_dropdown: 'visible',
      interviews_dropdown: 'hidden',
      opinions_dropdown: 'hidden'
    })
  }

  toggleInterviewVisible() {
    this.setState({
      stories_dropdown: 'hidden',
      interviews_dropdown: 'visible',
      opinions_dropdown: 'hidden'
    })
  }

  toggleOpinionVisible() {
    this.setState({
      stories_dropdown: 'hidden',
      interviews_dropdown: 'hidden',
      opinions_dropdown: 'visible'
    })
  }

  toggleStoryHidden() {
    this.setState({
      ...this.state,
      stories_dropdown: 'hidden'
    })
  }

  toggleInterviewHidden() {
    this.setState({
      ...this.state,
      interviews_dropdown: 'hidden'
    })
  }

  toggleOpinionHidden() {
    this.setState({
      ...this.state,
      opinions_dropdown: 'hidden'
    })
  }

  render() {
    return (
      <div>
        <div className={styles.navbar}>
          <Link className={styles.stories} to={RouterPathEnum.STORIES} onMouseEnter={this.toggleStoryVisible}>
            Stories
          </Link>
          <Link className={styles.stories} to={RouterPathEnum.INTERVIEWS} onMouseEnter={this.toggleInterviewVisible}>
            Interviews
          </Link>
          <Link to={RouterPathEnum.HOME}>
            <img className={styles.logo} src={logo} alt='4dm2023-logo' />
          </Link>
          <Link className={styles.stories} to={RouterPathEnum.OPINIONS} onMouseEnter={this.toggleOpinionVisible}>
            Opinions
          </Link>
          <a
            className={styles.stories}
            href='https://4digitmwc.github.io/skillban-articles/'
          >
            Skillbans
          </a>
        </div>
        <div className={styles.dropdowns}>
          <div style={{visibility: this.state.stories_dropdown, margin: "20px 5%"}} onMouseLeave={this.toggleStoryHidden}>
            <Dropdown article_type='stories' articles={this.props.stories}  />
          </div>
          <div style={{visibility: this.state.interviews_dropdown, margin: "20px 0%", backgroundColor: "rgba(0,0,0,0)"}} onMouseLeave={this.toggleInterviewHidden}>
            <Dropdown article_type='interviews' articles={this.props.interviews} />
          </div>
          <div style={{visibility: this.state.opinions_dropdown, margin: "20px 5%", backgroundColor: "rgba(0,0,0,0)"}} onMouseLeave={this.toggleOpinionHidden}>
            <Dropdown article_type='opinions' articles={this.props.opinions} />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
