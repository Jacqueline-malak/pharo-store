import { Grid, Card, Text } from "@nextui-org/react";
import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className="main">
    
        <Grid.Container gap={2} justify="center" >
            <Link href="/">
                <Grid>
                    <Card isPressable='true' isHoverable='true'>
                        <Card.Body>
                        <Text
                        h1
                        size={60}
                        css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                        }}
                        weight="bold"
                    >
                        HOME
                    </Text>
                        </Card.Body>
                    </Card>
                </Grid>
            </Link>
            <Link href="/gallery">
            <Grid>
                    <Card isPressable='true' isHoverable='true'>
                        <Card.Body>
                        <Text
                        h1
                        size={60}
                        css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                        }}
                        weight="bold"
                    >
                        Gallery
                    </Text>
                        </Card.Body>
                    </Card>
                </Grid>
            </Link>
            <Link href="/">
                <Grid>
                    <Card isPressable='true' isHoverable='true'>
                        <Card.Body>
                        <Text
                        h1
                        size={60}
                        css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                        }}
                        weight="bold"
                    >
                        CONTACT US
                    </Text>
                        </Card.Body>
                    </Card>
                </Grid>
            </Link>
            
        </Grid.Container>
    </div>
  )
}

export default navbar