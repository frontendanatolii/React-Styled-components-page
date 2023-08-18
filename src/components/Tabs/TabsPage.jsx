import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import classes from './TabsPage.module.css';
import { Summary } from '../Summary/Summary';

export const TabsPage = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className={classes.tabs_container}>
        <ul className={classes.tabs}>
          {tabs.map(tab => (
            <li key={tab.id}>
              <Link
                to={`/tabs/${tab.id}`}
                className={classNames(classes.tabs_tab,
                  {
                    'is-active': tab.id === tabId,
                  },
                )}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className={classes.content}>
          {selectedTab
            ? selectedTab.content
            : 'there is no content'
          }
        </div>
      </div>
    </>
  );
};
