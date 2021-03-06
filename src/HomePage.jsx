import React, { Component } from 'react';
import { Navbar, Profile, Contact, Home, Projects } from './contents';
import './css';

class None extends Component { render() { return (<></>) } }
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ViewPage: Home,
      pageSplit: [],
      transitionPage: 'none',
      titleName: 'HOME',
      title: "_"
    }
  }
  changeView = (id) => {
    let pageSplit = id.split(' ')
    this.setState({ ViewPage: None, transitionPage: '', pageSplit: pageSplit })

    setTimeout(() => {
      switch (id) {
        case 'H O M E':
          this.setState({ ViewPage: Home, titleName: 'HOME' });
          break;
        case 'P R O F I L E':
          this.setState({ ViewPage: Profile, titleName: 'PROFILE' });
          break;
        case 'P R O J E C T S':
          this.setState({ ViewPage: Projects, titleName: 'PROJECTS' });
          break;
        case 'C O N T A C T':
          this.setState({ ViewPage: Contact, titleName: 'CONTACT' });
          break;
        default:
          this.setState({ ViewPage: Home, titleName: 'HOME' });
          break;
      }
      this.setState({ transitionPage: 'none' })
    }, 2700);
  }

  render() {
    const { ViewPage } = this.state
    return (
      <div id={this.state.titleName} className="HomePage">
        <Navbar changeView={this.changeView} />
        <div style={{ display: this.state.transitionPage }} className='pageTransition'>
          {this.state.pageSplit.map((pageSplit) => (
            <div className='transition'>
              {pageSplit}
            </div>
          )
          )}
        </div>
        <ViewPage />
      </div>
    )
  }
  exitNameTitle = () => {
    return this.state.titleName
  }
  componentDidMount() {
    let title = [
      '_',
      'L_',
      'LE_',
      'LEO_',
      'LEON_',
      'LEONA_',
      'LEONAR_',
      'LEONARD_',
      'LEONARDO_',
      'LEONARDO _',
      'LEONARDO Q_',
      'LEONARDO Q._',
    ]
    let i = 0
    setInterval(() => {
      i < title.length - 1 ? i++ : i = 0
      this.setState({ title: title[i] })
    }, 400)
  }
  componentDidUpdate(){
    document.title = this.state.title
  }
}