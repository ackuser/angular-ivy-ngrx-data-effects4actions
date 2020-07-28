import { Component, VERSION } from "@angular/core";
import { Observable } from "rxjs";
import Post from "./interfaces";
import { PostService } from "./post.service";

@Component({
  selector: "post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent {
  loading$: Observable<boolean>;
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {
    this.posts$ = postService.entities$;
    this.loading$ = postService.loading$;
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.postService.getAll();
  }
}
