import { Navbar, Button, Text, Container } from "@nextui-org/react";

const AdminLayout = () => (
    <Container>
    <Navbar isBordered variant={variant}>
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          Mission Brasil
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">Customers</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  </Container>
)

export { AdminLayout }