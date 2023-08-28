<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    public function definition(): array
    {
        $category = Category::find(rand(1, 5));

        return [
            'title' => fake()->text(30),
            'user_id' => rand(1, 10),
            'status' => 'published',
            'content' => fake()->text(300),
            'category_id' => $category->id
        ];
    }
}
