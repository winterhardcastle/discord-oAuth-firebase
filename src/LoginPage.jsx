import { Button, Icon } from "@mui/material";

const LoginPage = () => {
    const svgIcon = (
        <Icon>
          <img alt="edit" src="discord-icon-svgrepo-com.svg" />
        </Icon>
      );

    return (
        <>
            <div>
                <Button startIcon={svgIcon} variant="contained">
                    Login with Discord
                </Button >
            </div>
        </>
    )
}

export default LoginPage;
