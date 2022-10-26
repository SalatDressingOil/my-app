import React from "react";
import ReactDOM, { render } from "react-dom/client";
import {
  AdaptivityProvider,
  ConfigProvider,
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  PanelHeaderBack,
  Cell,
  CellButton
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: "panel1",
    };
  }

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Panel id="panel1">
          <PanelHeader>More</PanelHeader>
          <Group>
            <Cell
              expandable
              onClick={() => this.setState({ activePanel: "panel2" })}
            >
              Friends
            </Cell>
            <Cell
              expandable
              onClick={() => this.setState({ activePanel: "panel2" })}
            >
              Communities
            </Cell>
            <Cell
              expandable
              onClick={() => this.setState({ activePanel: "panel2" })}
            >
              Music
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel2">
          <PanelHeader
            separator={false}
            before={
              <PanelHeaderBack
                onClick={() => this.setState({ activePanel: "panel1" })}
              />
            }
          >
            Communities
          </PanelHeader>
          <Group>
            <Cell
              description="Humor"
              onClick={() => this.setState({ activePanel: "panel3" })}
            >
              Swipe Right
            </Cell>
            <Cell
              description="Cultural Center"
              onClick={() => this.setState({ activePanel: "panel3" })}
            >
              Out Cinema
            </Cell>
            <Cell
              description="Movies"
              onClick={() => this.setState({ activePanel: "panel3" })}
            >
              #ARTPOKAZ
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel3" centered>
          <PanelHeader
            before={
              <PanelHeaderBack
                onClick={() => this.setState({ activePanel: "panel2" })}
              />
            }
          >
            Out Cinema
          </PanelHeader>
          <div style={{ marginTop: 10 }}>Centered Content</div>
        </Panel>
      </View>
    );
  }
}

<Example />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Example />);
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/