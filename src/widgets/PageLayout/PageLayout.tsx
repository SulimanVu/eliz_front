import { Flex } from 'antd'
import { Nav } from 'widgets/Nav/ui/Nav'
import React from 'react';
import styles from './PageLayout.module.scss'

const PageLayout = ({ children }) => {
  return (
    <Flex>
      <Nav />
      <div className={styles.children}>
        {children}
      </div>
    </Flex>
  )
}

export default PageLayout