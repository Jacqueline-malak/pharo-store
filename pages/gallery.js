import React from 'react'
import { Grid, Card, Text,Button ,Row} from "@nextui-org/react";
import Products from "./products.json"

const gallery = () => {
  return (
    <div>
        <div className='Indexcontainer' style={{marginLeft: "550px",marginRight: "auto"}}>
            <Button.Group size="xl">
            <Button>T-SHIRT</Button>
            <Button>Souvenires</Button>
            <Button>SHIRTs</Button>
            </Button.Group>
        </div>
        <div className='Indexcontainer' >
                <Grid.Container gap={2} justify="flex-start">
            {Products.map((item, index) => (
                <Grid xs={6} sm={3} key={index}>
                <Card isPressable>
                    <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={"https://nextui.org" + item.img}
                        objectFit="cover"
                        width="100%"
                        height={140}
                        alt={item.title}
                    />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text b>{item.title}</Text>
                        <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                        {item.price}
                        </Text>
                    </Row>
                    </Card.Footer>
                </Card>
                </Grid>
            ))}
            </Grid.Container>
        </div>
        

    </div>
  )
}

export default gallery