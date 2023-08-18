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
            <li>
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

        <div className="block" data-cy="TabContent">
          {selectedTab &&
            (tabId === 'summary'
            ? <Summary />
            : selectedTab.content)
          }
        </div>
      </div>
    </>
  );
};
