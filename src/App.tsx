import { Path } from 'enum.types';
import { PageCategory } from 'pages/PageCategory';
import { PageMain } from 'pages/PageMain';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from 'shared/Footer/Footer';
import { Header } from 'shared/Header';
import './style.scss';

export class App extends React.Component {
  state = {
    isGameMode: false,
    isStartGame: false,
  };

  // setIsGameMode = () => this.setState({ isGameMode: !this.state.isGameMode });
  setIsGameMode = (value: boolean) => this.setState({ isGameMode: value });

  setIsStartGame = (value: boolean) => this.setState({ isStartGame: value });

  render() {
    return (
      <BrowserRouter>
        <Header
          setIsGameMode={this.setIsGameMode}
          gameMode={this.state.isGameMode}
          setIsStartGame={this.setIsStartGame}
        />
        <Switch>
          <Route
            path={`${Path.category}/:categoryName`}
            exact
            render={({ match }) => (
              <PageCategory
                categoryName={match.params.categoryName}
                gameMode={this.state.isGameMode}
                isStartGame={this.state.isStartGame}
                setIsStartGame={this.setIsStartGame}
                resetGameMode={this.setIsGameMode}
              />
            )}
          ></Route>
          <Route path="/" component={PageMain} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
