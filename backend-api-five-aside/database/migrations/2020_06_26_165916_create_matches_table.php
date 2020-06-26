<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matches', function (Blueprint $table) {
            $table->id();
            $table->string("team_one_name", 50)->default('');
            $table->integer("team_one_score")->default(0);
            $table->string("team_two_name", 50)->default('');
            $table->integer("team_two_score")->default(0);
            $table->json("team_one_players")->nullable();
            $table->json("team_two_players")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('matches');
    }
}
