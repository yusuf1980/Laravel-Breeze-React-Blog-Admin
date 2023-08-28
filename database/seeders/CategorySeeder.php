<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $array = ['MySQL', 'PHP', 'JavaScript', 'ReactJs', 'VueJs'];

        foreach($array as $arr) {
            Category::create([
                'name' => $arr
            ]);
        }
    }
}
