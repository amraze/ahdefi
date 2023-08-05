<?php

namespace App\Http\Controllers;

use App\Models\Goal;
use App\Http\Requests\StoreGoalRequest;
use App\Http\Requests\UpdateGoalRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use JsonException;

class GoalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $goals = Goal::all();

        return new JsonResponse(['ok' => true, 'data' => $goals]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreGoalRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGoalRequest $request)
    {
        $data = $request->validated();

        $created = Goal::query()->create([
            'title' => $data['title'],
            'description' => $data['description'],
            'link' => $data['link'],
            'price' => $data['price'],
        ]);

        if (!$created) {
            throw new JsonException('Failed to create goal');
        }

        return new JsonResponse(['ok' => true, 'message' => 'Goal created successfully !']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Goal  $goal
     * @return \Illuminate\Http\Response
     */
    public function show(Goal $goal)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateGoalRequest  $request
     * @param  \App\Models\Goal  $goal
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGoalRequest $request, Goal $goal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Goal  $goal
     * @return \Illuminate\Http\Response
     */
    public function destroy(Goal $goal)
    {
        if ($goal) {
            $goal->delete();
            return new JsonResponse(['ok' => true, 'message' => 'Goal deleted successfully !']);
        } else {
            return new JsonResponse(['ok' => false, 'message' => 'Goal deletion failed !']);
        }
    }
}
