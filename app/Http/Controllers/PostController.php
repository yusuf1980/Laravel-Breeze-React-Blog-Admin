<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class PostController extends Controller
{
    public function index(): response
    {
        $posts = Post::orderBy('id', 'desc')->paginate(10);

        return inertia::render('Posts/index', [
            'posts' => $posts
        ]);
    }

    public function create(): response
    {
        return inertia::render('Posts/Create', ['status' => session('status')]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => ['required', 'min:3'],
        ]);

        $user_id = Auth::user()->id;
        Post::create([
            'title' => $request->title,
            'status' => $request->status,
            'content' => $request->content,
            'user_id' => $user_id
        ]);

        return Redirect::route('posts.index');
    }

    public function Edit($id): response
    {
        $post = Post::findOrFail($id);
        return inertia::render('Posts/Edit', ['post'=>$post]);
    }

    public function update(Request $request, $id): RedirectResponse
    {
        $post = Post::findOrFail($id);
        $request->validate([
            'title' => ['required', 'min:3'],
        ]);
        $post->title = $request->title;
        $post->status = $request->status;
        $post->content = $request->content;
        $post->save();

        return Redirect::route('posts.index');
    }

    public function destroy($id): RedirectResponse
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return Redirect::route('posts.index');
    }
}
