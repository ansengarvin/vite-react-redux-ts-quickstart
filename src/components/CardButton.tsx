import styled from "@emotion/styled";

interface CardButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    ariaLabel?: string;
}

export function CardButton(props: CardButtonProps) {
    const { children, onClick, ariaLabel } = props;

    return (
        <CardButtonStyle onClick={onClick} aria-label={ariaLabel}>
            {children}
        </CardButtonStyle>
    );
}

const CardButtonStyle = styled.button`
    // Remove all styling
    all: unset;

    // Add my own styling
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.onPrimary};
    border-radius: 5px;
    padding: 10px;
    transition:
        background-color 0.25s ease-in-out,
        color 0.25s ease-in-out,
        border 0.25s ease-in-out;
    :active {
        transform: scale(0.98);
    }

    :hover,
    :focus-visible {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.primaryHover};
        color: ${(props) => props.theme.colors.onPrimary};
    }
`;
