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
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {
    this.posts$ = postService.entities$;
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll();
  }
}
