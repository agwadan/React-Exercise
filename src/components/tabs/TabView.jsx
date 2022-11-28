import React, { useState } from 'react';
import './TabView.css';

function TabView({ title, tabs = {} }) {
  
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index) => {
    setActiveTabIndex(index);
  }
  return (
    <div className='tab-view'>
      {title && <h4 className='title'>{title}</h4>}
      <div className="body">
        {Object.keys(tabs).length === 0 ? 
          <div>No tabs</div> :
             
          <div>

            {/* Tab Headers */}
            <div className="tabs">
              {
                tabs.map((tab, index) => 
                  <label
                    key={index}
                    className={index === activeTabIndex ? 'active-tab' : 'tab'}
                    onClick={()=>activateTab(index)}
                  >
                    {tab.name}
                  </label>)
              }
            </div>

            {/* Tab Content */}
            <div className="content">
              {tabs[activeTabIndex].content}
            </div>
          </div>}
      </div>
    </div>
  )
}

export default TabView