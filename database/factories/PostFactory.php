<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->text(30),
            'user_id' => rand(1, 10),
            'status' => 'published',
            // 'total_like' => 0,
            // 'total_dislike' => 0,
            // 'published_date' => date("Y-m-d H:i:s"),
            'content' => fake()->text(300)
        ];
    }
}
