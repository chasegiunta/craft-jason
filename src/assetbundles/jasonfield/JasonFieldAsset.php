<?php
/**
 * Jason plugin for Craft CMS 3.x
 *
 * A field type for displaying & editing JSON data.
 *
 * @link      https://chasegiunta.com
 * @copyright Copyright (c) 2019 Chase Giunta
 */

namespace chasegiunta\jason\assetbundles\jasonfield;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * JasonFieldFieldAsset AssetBundle
 *
 * AssetBundle represents a collection of asset files, such as CSS, JS, images.
 *
 * Each asset bundle has a unique name that globally identifies it among all asset bundles used in an application.
 * The name is the [fully qualified class name](http://php.net/manual/en/language.namespaces.rules.php)
 * of the class representing it.
 *
 * An asset bundle can depend on other asset bundles. When registering an asset bundle
 * with a view, all its dependent asset bundles will be automatically registered.
 *
 * http://www.yiiframework.com/doc-2.0/guide-structure-assets.html
 *
 * @author    Chase Giunta
 * @package   Jason
 * @since     1.0.0
 */
class JasonFieldAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * Initializes the bundle.
     */
    public function init()
    {
        // define the path that your publishable resources live
        $this->sourcePath = "@chasegiunta/jason/assetbundles/jasonfield/dist";

        // define the dependencies
        $this->depends = [
            CpAsset::class,
        ];

        // define the relative path to CSS/JS files that should be registered with the page
        // when this asset bundle is registered
        $this->js = [
            'js/app.js',
            'js/chunk-vendors.js',
            // 'http://localhost:8080/app.js'
        ];

        $this->css = [
            'css/app.css',
        ];

        parent::init();
    }
}
