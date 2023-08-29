<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Support\Facades\Redirect;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::orderBy('id', 'desc')->paginate(10);

        return inertia::render('Category/index', [
            'categories' => $categories
        ]);
    }
    public function create()
    {
        return inertia::render('Category/Create', ['status' => session('status')]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        Category::create([
            'name' => $request->name
        ]);

        return Redirect::route('categories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // $category = Category::findOrFail($id);
        // return inertia::render('Category/Show', ['categaory'=>$category]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $item = Category::findOrFail($id);
        return inertia::render('Category/Edit', ['category'=>$item]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, string $id)
    {
        $item = Category::findOrFail($id);
        $item->name = $request->name;
        $item->save();

        return Redirect::route('categories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Category::findOrFail($id);
        $item->delete();

        return Redirect::route('categories.index');
    }
}
