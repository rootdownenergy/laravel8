<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use \Lib\Interface\NonceGenerator;

class AddCspHeader implements NonceGenerator
{
    public $nonce;
    public function generateNonce() : String {
        $result = Str::random(32);
        return $result;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);


        $response->headers->set('Content-Security-Policy', "default-src 'none'; script-src 'self' 'nonce-livewire1111dev' *.crestonegardens.com; connect-src 'self'; img-src 'self' *.cloudfront.net; style-src 'self'; base-uri 'self'; form-action 'self';");

        return $response;
    }
}
