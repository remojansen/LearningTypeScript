import { Component } from "@angular/core";

@Component({
    selector: "home-page",
    template: "Home!"
})
export class HomePageComponent {
    //
}


/*
import { Component } from "@angular/core";

@Component({
    selector: "home-page",
    template: `
    <Container>
        <Row>
            <Column width={6}>
                <Card
                    title="Movies"
                    description="Explore our database of movies"
                    linkPath="movies"
                    linkText="Movies"
                    img={null}
                />
            </Column>
            <Column width={6}>
                <Card
                    title="Actors"
                    description="Explore our actors of movies"
                    linkPath="actors"
                    linkText="Actors"
                    img={null}
                />
            </Column>
        </Row>
    </Container>
    `
})
export class HomePage {
    //
}
*/
