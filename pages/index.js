import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import fetch from 'node-fetch';
import { keys } from '@material-ui/core/styles/createBreakpoints';
import { Button } from '@material-ui/core';
import Players from '../components/players';
import PlayerDetails from '../components/playerDetails';
import pdfHelper from '../lib/pdfHelper';

function Home({ nba }) {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />

          <title>NBA Teams</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main>
          <div className="header">
            <h1>ALL STAR NBA PLAYERS</h1>
            <div className="header-btn">
              <Button variant="outlined" color="primary">Export PDF</Button>
            </div>
          </div>

          {/* <Players>
            { Object.values(nba.roster).map(roster => (
                Object.values(roster.players).map(players => (
                  players.map((player, index) => (
                    <PlayerDetails key={index} name={player.firstName} surname={player.lastName} team={player.teamName} />        
                  ))
                ))
              ))
            }
          </Players> */}

          <Grid container spacing={2}>
          { Object.values(nba.roster).map(roster => (
              Object.values(roster.players).map(players => (
                players.map((player, index) => (
                  
                  <Grid key={index} item xs={12} sm={12} md={4} lg={4}>
                    <Card>
                      <CardContent>
                        <h2>{player.firstName} {player.lastName}</h2>
                            
                        <h3>{player.teamName}</h3>
                      </CardContent>
                    </Card>
                  </Grid>
                  
                ))
              ))
            ))
          }
          </Grid>
        </main>

        <footer>
          <a
            href="https://https://github.com/Sjk-Lacoste"
            target="_blank"
          >
            Developed by Tshepo Mohlatlole
          </a>
        </footer>

        <style jsx>{`
          .container {
            min-height: 100vh;
          }

          .header {
            display flex;
            justify-content: space-between;
            align-atems: center;
          }

          .header .header-btn {
            display: flex;
            align-items: center;
          }
          

          footer {
            width: 100%;
            margin-top: 30px;
            padding: 1.5em;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 1s ease-in-out;
          }

          footer a:hover {
            color: #000;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </Container>
    </div>
  )
}

Home.getInitialProps = async function(){
  const res = await fetch('https://data.nba.net/prod/v1/allstar/2016/AS_roster.json');
  const data = await res.json();

  return {
    nba: data.sportsContent
  }
}

export default Home;