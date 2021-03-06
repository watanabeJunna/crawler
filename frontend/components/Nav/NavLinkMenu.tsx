import { FC, ReactText } from "react"
import Link from "next/link"
import styled from "styled-components"
import { Item } from "./Item"

type Props = {
    items: any
}

export const NavLinkMenu: FC<Props> = props => (
    <NavLinkMenuWrapper>
        {
            props.items.map((item: any, c: ReactText) => {
                const navItem = <NavItem key={c}>{item.name}</NavItem>

                return (
                    typeof item.link !== 'undefined'
                        ? <Link href={item.link} key={c}>{navItem}</Link>
                        : navItem
                )
            })
        }
    </NavLinkMenuWrapper>
)

const NavLinkMenuWrapper = styled.div`
    display: flex;
`

const NavItem = styled.div`
    ${Item}
    padding: 18px 32px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
`