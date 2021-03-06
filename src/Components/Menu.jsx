import React from 'react'
import styled from 'styled-components'
import dbMenu from "./DBMenu";
import {ListItem} from './ListItem'
import bannerImg from '../image/banner.png'


const Banner = styled.div`
  width: 100%;
  height: 210px;
  background-repeat: no-repeat;
  background-size: 100%;
`

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`

const SectionMenu = styled.section`
  padding: 30px;
`

export const Menu = () => (
    <MenuStyled>
      <Banner style={{backgroundImage: `url(${bannerImg})`}}></Banner>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger}/>
        </SectionMenu>
      <SectionMenu>
        <h2>Закуски / Напитки</h2>
        <ListItem itemList={dbMenu.other}/>
      </SectionMenu>
    </MenuStyled>
)
