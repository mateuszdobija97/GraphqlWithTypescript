type Props = {
    header: string
}

const Header = ({ header }: Props) => <h2 className="app__header">{header}</h2>;

export default Header;
