import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Config } from 'src/app/interface/posts';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  public headers: any;
  public posts: Config[] | null | undefined;
  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    //Normal api call
    // this.api.getData({ url: 'posts' }).subscribe({
    //   next: (v) => console.log(v, 'vvv'),
    //   error: (e) => console.error(e),
    //   complete: () => console.info('complete'),
    // });
    this.getPosts();
  }

  postsForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
    userId: 1,
  });

  onSubmit(): void {
    if (this.postsForm.valid) {
      this.api.setData('users', [
        ...this.postsForm,
        {
          ...this.postsForm.value,
          id: Math.floor(Math.random() * 100000000),
        },
      ]);
      this.openSnackBar('Added Successfully', 'Close');
      this.handleClear();
      this.getPosts();
    }
  }

  handleClear() {
    this.postsForm.reset();
  }

  getPosts() {
    this.api
      .getData({ url: 'posts' })
      // resp is of type `HttpResponse<Config>`
      .subscribe((resp) => {
        console.log(resp, 'resp');
        const keys = resp.headers.keys();
        this.headers = keys.map((key) => `${key}: ${resp.headers.get(key)}`);
        // access the body directly, which is typed as `Config`.
        this.posts = resp.body;
        console.log(this.posts);
      });
  }
}
