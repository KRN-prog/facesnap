import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      title: "Culpa occaecat do id ex commodo nostrud irure proident cillum do consectetur.",
      description: "Do aliqua nulla nostrud deserunt excepteur cupidatat ex sit.",
      creationDate: new Date(),
      like: 0,
      imageUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      location: "Deauville"
    },
    {
      title: "Fugiat Lorem quis cupidatat ullamco nulla ipsum dolor duis dolore.",
      description: "Quis in laborum exercitation Lorem incididunt qui ad officia sit Lorem do. Lorem reprehenderit cupidatat occaecat pariatur consectetur amet. Eiusmod fugiat velit proident elit non non voluptate excepteur qui quis dolore nulla. Tempor velit veniam minim enim in laboris. Tempor dolor minim do dolore in ullamco Lorem ipsum aliqua et in. Dolore occaecat qui ea quis.",
      creationDate: new Date(),
      like: 0,
      imageUrl: "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
    },
    {
      title: "Sit exercitation irure non eu duis duis.",
      description: "Excepteur reprehenderit labore ea in reprehenderit nisi nisi. Esse exercitation commodo est sit. Non non aute esse cupidatat pariatur ex ut do reprehenderit. Cupidatat enim est velit officia labore consectetur ut nostrud esse voluptate.",
      creationDate: new Date(),
      like: 0,
      imageUrl: "https://thumbs.dreamstime.com/b/jour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg",
      location: "Bordeaux"
    },
    {
      title: "Elit velit et fugiat cillum aliquip est non velit.",
      description: "Enim ad proident esse exercitation mollit incididunt magna sunt officia. Nostrud nulla veniam dolore cillum reprehenderit consequat consectetur mollit do cillum aliqua deserunt deserunt velit. Esse ullamco velit tempor proident veniam. Ipsum commodo sint eiusmod sit deserunt officia consequat aliquip eu minim consequat commodo.",
      creationDate: new Date(),
      like: 0,
      imageUrl: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
      location: "Marseille"
    },
    {
      title: "Elit dolore Lorem commodo aliqua laborum enim non magna adipisicing velit exercitation consequat eiusmod id.",
      description: "Aute officia deserunt duis reprehenderit mollit consectetur ea dolore ipsum dolor mollit reprehenderit non. Enim aliquip sunt veniam deserunt reprehenderit nulla enim cillum. Qui ad sint est ut esse dolor minim mollit sit minim dolor. Aute sint veniam excepteur ad adipisicing pariatur ut aute voluptate ullamco culpa non irure duis.",
      creationDate: new Date(),
      like: 0,
      imageUrl: "https://img-19.commentcamarche.net/wzKKufHO7dLH-WPFdXJHEmOmi7E=/1500x/smart/2d8c2b30aee345008ee860087f8bcdc9/ccmcms-commentcamarche/36120212.jpg"
    },
    {
      title: "Cupidatat ad sunt consequat id esse.",
      description: "Enim fugiat labore proident consequat sunt amet in ad mollit reprehenderit et ad. Aliqua aliqua fugiat do est nulla duis deserunt minim eiusmod incididunt ut commodo labore proident. Eu nostrud consequat qui sit labore minim commodo aliqua ea irure enim ad id excepteur. Pariatur pariatur consectetur occaecat consectetur adipisicing. Minim velit cupidatat amet et aliqua quis ullamco laborum sunt.",
      creationDate: new Date(),
      like: 0,
      imageUrl: "https://blog-fr.orson.io/wp-content/uploads/2017/06/jpeg-ou-png.jpg"
    }
  ]
}