<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('title');
            $table->enum('status', ['draft', 'published'])->default('draft');
            // $table->bigInteger('total_like')->default(0);
            // $table->bigInteger('total_dislike')->default(0);
            $table->timestamp('published_date')->useCurrent();
            $table->string('image')->nullable();
            // $table->string('slug')->unique();
            $table->longText('content')->nullable();
            $table->boolean('featured')->default(0);
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
